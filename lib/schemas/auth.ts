import { z } from "zod";

export const AuthSchema = z.object({
  username: z.string().min(3).regex(/^[a-zA-Z0-9._/\\ ]+$/),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[@$!%*?&./\\]/),
  // Only add this for signup
  confirmPassword: z.string().optional() 
}).refine(data => !data.confirmPassword || data.password === data.confirmPassword, {
  message: "Keys do not match",
  path: ["confirmPassword"]
});