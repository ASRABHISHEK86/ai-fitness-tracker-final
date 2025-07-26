import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  const activeClass = 'bg-purple-600/50 text-white';
  const inactiveClass = 'hover:bg-gray-700/50';
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-3 my-1 rounded-lg transition-colors ${isActive ? activeClass : inactiveClass}`
      }
    >
      {children}
    </NavLink>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-white mb-10 text-center">
        AI Fitness
      </h1>
      <nav>
        <NavItem to="/">Dashboard</NavItem>
        <NavItem to="/calendar">Calendar</NavItem>
        <NavItem to="/reports">Reports</NavItem>
        <NavItem to="/guides">Workout Guides</NavItem>
      </nav>
      <div className="mt-auto text-center text-xs text-gray-500">
        <p>Version 2.0</p>
        <p>Toning Transformation</p>
      </div>
    </aside>
  );
}