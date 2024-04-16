import { z } from 'zod';

const loginSchema = z.object({
  user_name_email: z.string().min(2, { message: 'at least 2 chars' }),
  password: z.string().min(8, { message: 'at least 8 chars' }),
});


export default loginSchema;