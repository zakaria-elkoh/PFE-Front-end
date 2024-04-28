import { z } from 'zod';

const signUpSchema = z.object({
  role_id: z.string(),
  user_name: z.string().min(2, { message: 'at least 2 chars' }),
  email: z.string().min(2, { message: 'at least 2 chars' }),
  name: z.string().min(2, { message: 'at least 2 chars' }),
  password: z.string().min(8, { message: 'at least 8 chars' }),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: "password does not match",
  path: ['confirm_password']
});
  

export default signUpSchema;