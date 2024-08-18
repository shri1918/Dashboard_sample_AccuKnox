import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard = ({ toggleDrawer, searchQuery }) => {
  const categories = useSelector(state => state.dashboard.categories) || [];

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="dashboard">
      {filteredCategories.map(category => (
        <Category key={category.id} category={category} toggleDrawer={toggleDrawer} />
      ))}
    </div>
  );
};

export default Dashboard;
