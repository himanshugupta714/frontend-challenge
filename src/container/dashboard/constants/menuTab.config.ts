export const menuTabs: IMenuTab[] = [
  {
    label: "Personal Info",
    isActive: false,
    isCompleted: true,
  },
  {
    label: "Role",
    isActive: false,
    isCompleted: true,
  },
  {
    label: "Role Details",
    isActive: false,
    isCompleted: true,
  },
  {
    label: "Agreements",
    isActive: true,
    isCompleted: false,
  },
  {
    label: "Additional Info",
    isActive: false,
    isCompleted: false,
  },
  {
    label: "Source",
    isActive: false,
    isCompleted: false,
  },
  {
    label: "Equipment",
    isActive: false,
    isCompleted: false,
  },
  {
    label: "Offer",
    isActive: false,
    isCompleted: false,
  },
  {
    label: "Review",
    isActive: false,
    isCompleted: false,
  },
];

export interface IMenuTab {
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}
