export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export type ApiResponse = {
  success: boolean;
  message: string;
};
