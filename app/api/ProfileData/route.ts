import {    NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ProfileData from '@/models/profileData';

export async function GET() {
  try {
    await connectToDatabase();
    const profileData = await ProfileData.find({});
    return NextResponse.json({
      success: true,
      data: profileData,
    }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching profile data:", error.message);
    return NextResponse.json(
      { success: false, error: "Failed to fetch profile data." },
      { status: 500 }
    );
  }
}   
export async function POST(req: NextRequest){
    try{
        await connectToDatabase();
        const profiledata = await ProfileData.find({});
        if(profiledata.length > 0){
            return NextResponse.json({
                success:false,
                error:"Profile data already exists. Only one profile is allowed."
            },{status:400})
        }
        else{
            const data = await req.json();
            console.log("Received profile data:", data);
            const newProfileData = await ProfileData.create(data);
            return NextResponse.json({
                success:true,
                data:newProfileData
            },{status:201})
        }
    } catch (error: any) {
        console.log("Error creating profile data:", error.message);
        console.error("Error creating profile data:", error.message);
        return NextResponse.json(
            { success: false, error: "Failed to create profile data." },
            { status: 500 }
        );
    }
}