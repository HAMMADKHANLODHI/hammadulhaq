"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function Page() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Linkedin: "",
      Github: "",
      GoogleMap: "",
      Whatsapp: "",
      "Home-Summary": "",
      "About-Summary": "",
      Skills: [{ name: "", level: "" }],
      Education: [{ School: "", StartDate: "", EndDate: "", Summary: "" }],
      Experience: [
        { Company: "", Role: "", StartDate: "", EndDate: "", Desc: "" },
      ],
      Services: [{ icon: "", title: "", desc: "" }],
      Portfolio: [{ name: "", category: "", Image: null, Link: "" }],
    },
  });

  // Dynamic Array Managers
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({ control, name: "Skills" });
  const {
    fields: eduFields,
    append: appendEdu,
    remove: removeEdu,
  } = useFieldArray({ control, name: "Education" });
  const {
    fields: expFields,
    append: appendExp,
    remove: removeExp,
  } = useFieldArray({ control, name: "Experience" });
  const {
    fields: servFields,
    append: appendServ,
    remove: removeServ,
  } = useFieldArray({ control, name: "Services" });
  const {
    fields: portFields,
    append: appendPort,
    remove: removePort,
  } = useFieldArray({ control, name: "Portfolio" });

  const onSubmit = async(data: any) => {
    const response = await fetch("/api/ProfileData", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(response => {
      console.log("API Response:", response);
      alert("Profile data submitted successfully!");
    })
    .catch(err => {
      console.error("Error submitting profile data:", err);
      alert("Failed to submit profile data. Please try again.");
    });
    console.log("Final Submitted Data:", data);};

  // Theme Styles
  const inputClass =
    "p-2 rounded bg-white border border-amber-200 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full";
  const sectionClass =
    "space-y-4 bg-white p-6 rounded-xl shadow-sm border border-amber-100";
  const labelClass =
    "text-sm font-bold text-amber-900 uppercase tracking-wide mb-1";
  const addButtonClass =
    "bg-amber-400 text-amber-950 px-4 py-2 rounded-lg font-bold text-xs hover:bg-amber-500 transition-colors";

  return (
    <div className="w-full pb-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto space-y-8"
      >
        <h1 className="text-3xl font-black text-amber-950 border-b-4 border-amber-400 inline-block pb-1">
          UPDATE PROFILE
        </h1>

        {/* 1. CONTACT & SOCIAL INFO */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-amber-600 mb-4">
            Contact & Socials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex relative flex-col">
              <label className={labelClass}>
                Full Name{" "}
                {errors.Name && (
                  <span className="text-red-500 end-0 absolute text-xs mt-1 font-semibold">
                    {errors.Name.message}
                  </span>
                )}
              </label>
              <input
                {...register("Name", {
                  required: "Required",
                  minLength: { value: 3, message: "Min 3 Character" },
                  maxLength: { value: 15, message: "Max 15 Character" },
                })}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>
                Email{" "}
                {errors.Email && (
                  <span className="text-red-500 end-0 absolute text-xs mt-1 font-semibold">
                    {errors.Email.message}
                  </span>
                )}{" "}
              </label>
              <input
                type="email"
                {...register("Email", {
                  required: "Email is mandatory",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>WhatsApp</label>
              <input {...register("Whatsapp")} className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>LinkedIn</label>
              <input {...register("Linkedin")} className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>GitHub</label>
              <input {...register("Github")} className={inputClass} />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>Google Maps Link</label>
              <input {...register("GoogleMap")} className={inputClass} />
            </div>
          </div>
        </div>

        {/* 2. SUMMARIES */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-amber-600">Summaries</h2>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className={labelClass}>Home Summary</label>
              <textarea
                {...register("Home-Summary")}
                className={`${inputClass} h-20`}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>About Summary</label>
              <textarea
                {...register("About-Summary")}
                className={`${inputClass} h-32`}
              />
            </div>
          </div>
        </div>

        {/* 3. SKILLS */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-amber-600">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skillFields.map((field, index) => (
              <div
                key={field.id}
                className="flex gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100"
              >
                <input
                  {...register(`Skills.${index}.name`)}
                  placeholder="Skill (e.g. React)"
                  className={inputClass}
                />
                <input
                  {...register(`Skills.${index}.level`)}
                  placeholder="Level %"
                  className={`${inputClass} w-24`}
                />
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="text-red-500 font-bold px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => appendSkill({ name: "", level: "" })}
            className={addButtonClass}
          >
            + ADD SKILL
          </button>
        </div>

        {/* 4. EXPERIENCE */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-amber-600">Experience</h2>
          {expFields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 bg-amber-50 rounded-lg border border-amber-100 space-y-3 relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  {...register(`Experience.${index}.Company`)}
                  placeholder="Company"
                  className={inputClass}
                />
                <input
                  {...register(`Experience.${index}.Role`)}
                  placeholder="Role"
                  className={inputClass}
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="date"
                  {...register(`Experience.${index}.StartDate`)}
                  className={inputClass}
                />
                <input
                  type="date"
                  {...register(`Experience.${index}.EndDate`)}
                  className={inputClass}
                />
              </div>
              <textarea
                {...register(`Experience.${index}.Desc`)}
                placeholder="Job Description"
                className={`${inputClass} h-20`}
              />
              <button
                type="button"
                onClick={() => removeExp(index)}
                className="absolute top-2 right-2 text-red-500 text-xs font-bold uppercase"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendExp({
                Company: "",
                Role: "",
                StartDate: "",
                EndDate: "",
                Desc: "",
              })
            }
            className={addButtonClass}
          >
            + ADD EXPERIENCE
          </button>
        </div>

        {/* 5. EDUCATION */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-amber-600">Education</h2>
          {eduFields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 bg-amber-50 rounded-lg border border-amber-100 space-y-3 relative"
            >
              <input
                {...register(`Education.${index}.School`)}
                placeholder="School / University"
                className={inputClass}
              />
              <div className="flex gap-3">
                <input
                  type="date"
                  {...register(`Education.${index}.StartDate`)}
                  className={inputClass}
                />
                <input
                  type="date"
                  {...register(`Education.${index}.EndDate`)}
                  className={inputClass}
                />
              </div>
              <textarea
                {...register(`Education.${index}.Summary`)}
                placeholder="Education Summary"
                className={`${inputClass} h-20`}
              />
              <button
                type="button"
                onClick={() => removeEdu(index)}
                className="absolute top-2 right-2 text-red-500 text-xs font-bold uppercase"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendEdu({ School: "", StartDate: "", EndDate: "", Summary: "" })
            }
            className={addButtonClass}
          >
            + ADD EDUCATION
          </button>
        </div>

        {/* 6. SERVICES */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-amber-600">Services</h2>
          {servFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100 relative"
            >
              <input
                {...register(`Services.${index}.icon`)}
                placeholder="Icon Name"
                className={inputClass}
              />
              <input
                {...register(`Services.${index}.title`)}
                placeholder="Service Title"
                className={inputClass}
              />
              <textarea
                {...register(`Services.${index}.desc`)}
                placeholder="Service Description"
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => removeServ(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs shadow-lg"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendServ({ icon: "", title: "", desc: "" })}
            className={addButtonClass}
          >
            + ADD SERVICE
          </button>
        </div>

        {/* 7. PORTFOLIO */}
        <div className={sectionClass}>
          <h2 className="text-lg font-bold text-amber-600">Portfolio Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portFields.map((field, index) => (
              <div
                key={field.id}
                className="p-4 border-2 border-dotted border-amber-200 rounded-lg space-y-2 relative"
              >
                <input
                  {...register(`Portfolio.${index}.name`)}
                  placeholder="Project Name"
                  className={inputClass}
                />
                <input
                  {...register(`Portfolio.${index}.category`)}
                  placeholder="Category (Web, App, etc.)"
                  className={inputClass}
                />
                <input
                  type="file"
                  {...register(`Portfolio.${index}.Image`)}
                  placeholder="Image URL (e.g. https://...)"
                  className="text-xs text-amber-800"
                />
                <input
                  {...register(`Portfolio.${index}.Link`)}
                  placeholder="Project Link"
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => removePort(index)}
                  className="text-red-600 text-xs font-bold block mt-2"
                >
                  Remove Project
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              appendPort({ name: "", category: "", Image: null, Link: "" })
            }
            className="bg-amber-950 text-amber-400 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest"
          >
            + ADD PROJECT
          </button>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-5 rounded-2xl text-xl shadow-xl transition-all active:scale-95 uppercase"
        >
          SAVE ALL CHANGES
        </button>
      </form>
    </div>
  );
}
