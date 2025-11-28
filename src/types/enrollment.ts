export interface Enrollment {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'pending' | 'contacted' | 'enrolled' | 'rejected';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}