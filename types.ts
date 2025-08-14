
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface Module {
  title: string;
  description: string;
  points: string[];
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}
