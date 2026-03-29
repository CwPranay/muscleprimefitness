'use server';
/**
 * @fileOverview An AI-powered chatbot assistant for Muscle Prime 2121.
 *
 * - inquiryAssistantChatbot - A function that handles user inquiries about the gym.
 * - InquiryAssistantInput - The input type for the inquiryAssistantChatbot function.
 * - InquiryAssistantOutput - The return type for the inquiryAssistantChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InquiryAssistantInputSchema = z.object({
  message: z.string().describe('The user\'s question or query for the gym\'s AI assistant.'),
});
export type InquiryAssistantInput = z.infer<typeof InquiryAssistantInputSchema>;

const InquiryAssistantOutputSchema = z.object({
  response: z.string().describe('The AI assistant\'s answer to the user\'s query.'),
  suggestedAction: z.string().optional().describe('A suggested next action for the user, like "Join Now" or "Call Us".'),
  suggestedActionLink: z.string().optional().describe('A URL or phone number for the suggested action.'),
});
export type InquiryAssistantOutput = z.infer<typeof InquiryAssistantOutputSchema>;

export async function inquiryAssistantChatbot(input: InquiryAssistantInput): Promise<InquiryAssistantOutput> {
  return inquiryAssistantChatbotFlow(input);
}

const inquiryAssistantPrompt = ai.definePrompt({
  name: 'inquiryAssistantPrompt',
  input: {schema: InquiryAssistantInputSchema},
  output: {schema: InquiryAssistantOutputSchema},
  prompt: `You are an AI assistant for Muscle Prime 2121, a premium fitness brand located in Kalyan, Maharashtra. Your primary goal is to provide accurate, helpful, and friendly information about the gym to potential members and encourage them to join.

Here is key information about Muscle Prime 2121:
- Business Name: Muscle Prime 2121
- Location: Kalyan, Maharashtra
- Phone: 9100462121
- WhatsApp Link for Joining: https://wa.me/919100462121

- Membership Plans:
    - Basic: ₹1500 per month
    - Standard: ₹4000 for 3 months (This is the best value plan!)
    - Premium: Available (details might require direct contact)
    - All plans include additional facility charges.

- Services/Training Offered: Weight Training, CrossFit, Cardio, Personal Training.
- Trust & Credibility: We boast 185+ Reviews, a 4.6 Rating ⭐, Premium Equipment, and Experienced Trainers.
- Member Feedback Examples: "Clean space, good crowd, great workout environment", "Friendly trainers and well-maintained machines", "Good results with consistent training".

Answer the user's questions concisely and directly based on the information above. If the user asks for details not explicitly provided (e.g., specific opening hours, detailed premium plan features, trainer names), politely state that you can't provide that exact detail and suggest they contact the gym directly using the provided phone number or WhatsApp link for personalized assistance.

If the user expresses interest in joining, pricing, or next steps, you MUST set the \`suggestedAction\` to "Join Now" and \`suggestedActionLink\` to "https://wa.me/919100462121".
If the user asks for more specific details that require human interaction, you MAY set the \`suggestedAction\` to "Call Us" and \`suggestedActionLink\` to "tel:9100462121".

User's Query: {{{message}}}`, 
});

const inquiryAssistantChatbotFlow = ai.defineFlow(
  {
    name: 'inquiryAssistantChatbotFlow',
    inputSchema: InquiryAssistantInputSchema,
    outputSchema: InquiryAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await inquiryAssistantPrompt(input);
    return output!;
  }
);