// @ts-ignore
import React from 'react';
import { getCurrentWindow } from '@tauri-apps/api/window';

const CustomTitleBar = () => {
  const appWindow = getCurrentWindow();

  const handleMinimize = () => {
    appWindow.minimize();
  };

  const handleMaximize = () => {
    appWindow.toggleMaximize();
  };

  const handleClose = () => {
    appWindow.close();
  };

  return (
    <div style={styles.titleBar} onDrag={appWindow.startDragging}>
      <h1 style={styles.title}>Tauri Localhost Loader</h1>
      <div style={styles.buttonContainer}>
        <button onClick={handleMinimize} style={styles.button}>_</button>
        <button onClick={handleMaximize} style={styles.button}>[]</button>
        <button onClick={handleClose} style={styles.button}>X</button>
      </div>
    </div>
  );
};

const styles = {
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333', // Customize as needed
    color: 'white',
  },
  title: {
    margin: 0,
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    marginLeft: '10px',
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
};

export default CustomTitleBar;
