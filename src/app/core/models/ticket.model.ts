export interface Ticket {
  ticketId: number;
  createdByUserId: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  createdAt: string;
  age: number;
  assignedToUserId?: string;
}
