import { Menu } from "../core/models/menu.model";
import { RoleMenuMapping } from "../core/models/role-menu.model";
import { Ticket, TicketCategory, TicketSubCategory } from "../core/models/ticket.model";
import { User } from "../core/models/user.model";


export class MockData {


  static users: User[] = [

    {
      userId: 'U001',
      name: 'Amit Sharma',
      role: 1,
      email: 'amit.sharma@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U002',
      name: 'Priya Verma',
      role: 1,
      email: 'priya.verma@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U003',
      name: 'Rahul Mehta',
      role: 1,
      email: 'rahul.mehta@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U004',
      name: 'Sneha Iyer',
      role: 1,
      email: 'sneha.iyer@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U005',
      name: 'Vikas Reddy',
      role: 1,
      email: 'vikas.reddy@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U006',
      name: 'Neha Kapoor',
      role: 1,
      email: 'neha.kapoor@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U004',
      name: 'Arjun Malhotra',
      role: 1,
      email: 'arjun.malhotra@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U008',
      name: 'Suresh Patil',
      role: 2,
      email: 'suresh.patil@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U009',
      name: 'Kavita Nair',
      role: 2,
      email: 'kavita.nair@smartassist.com',
      password: '12345'
    },
    {
      userId: 'U010',
      name: 'Rajiv Khanna',
      role: 3,
      email: 'rajiv.khanna@smartassist.com',
      password: '12345'

    }

  ];

  static menus: Menu[] = [
    { menuId: 1, menuName: 'Home', icon: 'home', route: '/user/home' },
    { menuId: 2, menuName: 'Create Ticket', icon: 'add_circle', route: '/user/create-ticket' },
    { menuId: 3, menuName: 'My Tickets', icon: 'confirmation_number', route: '/user/my-ticket' },
    { menuId: 4, menuName: 'Track Ticket', icon: 'track_changes', route: '/user/track-ticket' },
    { menuId: 5, menuName: 'Live Chat', icon: 'chat', route: '/user/live-chat' },
    { menuId: 6, menuName: 'AI Assistant', icon: 'smart_toy', route: '/user/ai-assistant' },
    //support
    { menuId: 7, menuName: 'Home', icon: 'home', route: '/support/home' },
    { menuId: 8, menuName: 'My Tickets', icon: 'confirmation_number', route: '/support/support-ticket' },
    { menuId: 9, menuName: 'Track Ticket', icon: 'track_changes', route: '/support/track-ticket' },
    { menuId: 10, menuName: 'Live Chat', icon: 'chat', route: '/support/live-chat' },
    { menuId: 11, menuName: 'AI Assistant', icon: 'smart_toy', route: '/support/ai-assistant' },
    //addmin
    { menuId: 12, menuName: 'Home', icon: 'home', route: '/supervisor/home' },
    { menuId: 13, menuName: 'Report', icon: 'confirmation_number', route: '/supervisor/support-ticket' },
    { menuId: 14, menuName: 'Live Chat', icon: 'chat', route: '/supervisor/live-chat' },

  ];

  // ROLE ↔ MENU
  static roleMenuMapping: RoleMenuMapping[] = [
    { role: 1, menuIds: [1, 2, 3, 4, 5, 6] },
    { role: 2, menuIds: [7, 8, 9, 10] },
    { role: 3, menuIds: [12,13,14] }
  ];

  // TICKETS
  static tickets: Ticket[] = [
    {
      ticketId: 23,
      title: 'Homepage not loading',
      description: 'Home page is not loading',
      createdByUserId: 'U001',
      createdByName: 'AAA',
      priority: 1,
      status: 2,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-20T10:30:00Z',
      assignedToUserId: 'U002',
      assignedToName: 'Vishnu',
      rating: 4,
      feedback: 'Great experience!'
    },
    {
      ticketId: 22,
      title: 'Login failure',
      description: 'Unable to login',
      createdByUserId: 'U001',
      createdByName: 'AAA',
      priority: 3,
      status: 3,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.Incident,
      createdAt: '2026-01-19T09:00:00Z',
      assignedToUserId: 'U003',
      assignedToName: 'Venkatesh',
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 21,
      title: 'Chat window not opening',
      description: 'Chat window not opening',
      createdByUserId: 'U002',
      createdByName: 'Vishnu',
      priority: 2,
      status: 1,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.BugDefect,
      createdAt: '2026-01-21T08:15:00Z',
      assignedToUserId: undefined,
      assignedToName: undefined,
      rating: 0,
      feedback: ''
    },
    {
      ticketId: 20,
      title: 'Profile update error',
      description: 'Profile update failing',
      createdByUserId: 'U003',
      createdByName: 'Venkatesh',
      priority: 2,
      status: 2,
      category: TicketCategory.Technical,
      subCategory: TicketSubCategory.ServiceRequest,
      createdAt: '2026-01-18T14:45:00Z',
      assignedToUserId: 'U009',
      assignedToName: 'AAA',
      rating: 3,
      feedback: 'Issue resolved slowly'
    }
  ];



}
