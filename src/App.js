import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import AddWidgetForm from './components/AddWidgetForm';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div className="App" style={{ padding: 5 }}>
      <header className="App-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <h1>Dashboard</h1>
        <TextField
          variant="outlined"
          placeholder="Search widgets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginRight: '20px',width: '500px' }}
        />
        <Button variant="contained" style={{backgroundColor: '#fff', color: '#666'}} onClick={toggleDrawer(true)} startIcon={<AddIcon />}>
        Add Widget
      </Button>
      </header>

      {/* Dashboard */}
      <Dashboard toggleDrawer={toggleDrawer(true)} searchQuery={searchQuery} />

      {/* Right Side Drawer for AddWidgetForm */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <AddWidgetForm />
      </Drawer>
    </div>
  );
}

export default App;
