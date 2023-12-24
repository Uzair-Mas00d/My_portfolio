'use server'

import { Resend } from "resend";
import { contactSchema } from "@/lib/type";

export const contactAction = async (newContact: unknown) => {
    const result = contactSchema.safeParse(newContact);
    if (!result.success) {
      let errorMessage = ''
       result.error.issues.forEach(issue =>{
        errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. '
       })
       
      return{
        error: errorMessage
      }
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data } = await resend.emails.send({
      // from: "onbording@resend.dev",
      from: "Acme <onboarding@resend.dev>",
      to: "uzairmasood050@gmail.com",
      subject: "Message from portfolio",
      html: `<h3 style='font-size: 17px'>${result.data.name} @${result.data.email}</h3>
              <p style='font-size: 14px; padding-left: 20px; font-weight: 550;'>${result.data.message}</p>
      `
    });
    if(data){
        return {
            success: 'message sent'
        }
    }
}
