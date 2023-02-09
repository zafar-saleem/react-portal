import React from 'react';
import { createPortal } from 'react-dom';

function App() {
  const [dialog, setDialog] = React.useState(false);
  const [tooltip, setTooltip] = React.useState(false);
  const tooltipRef = React.useRef();

  const toggleDialog = () => {
    setDialog(!dialog);
  }
  
  const toggleTooltip = () => {
    setTooltip(!tooltip);
  }

  return (
    <div>
      {
        dialog && (
          createPortal(
            <>
              <div style={{
                position: 'absolute',
                zIndex: '1',
                background: '#f9f9f9',
                width: '400px',
                height: '200px',
                margin: 'auto',
                padding: '1em',
                bottom: '0',
                top: '0',
                right: '0',
                left: '0',
              }}>
                <div style={{textAlign: 'right'}}>
                  <button style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: '1.3em',
                    transform: 'rotate(90deg)',
                    cursor: 'pointer',
                  }} onClick={toggleDialog}>x</button>
                </div>
                <div>
                  <p style={{
                    textAlign: 'center',
                    padding: '1em',
                  }}>This is dialog message</p>
                  <div style={{
                    textAlign: 'center',
                  }}>
                    <button style={{
                      marginRight: '1em',
                    }} onClick={toggleDialog}>Yes</button>
                    <button onClick={toggleDialog}>No</button>
                  </div>
                </div>
              </div>
              <div style={{
                width: '100%',
                minHeight: '100%',
                display: 'block',
                position: 'absolute',
                padding: '1em',
                top: '0',
                left: '0',
                background: '#000',
                boxSizing: 'border-box',
                opacity: '.5',
              }} onClick={toggleDialog}>
              </div>
            </>,
            document.body
          )
        )
      }
      <button onClick={toggleDialog}>Open Dialog</button>
      <button
        onMouseOver={toggleTooltip}
        onMouseLeave={toggleTooltip}
        ref={tooltipRef}
      >
        Open Tooltip
        {
          tooltip && (
            createPortal(
              <span style={{
                position: 'absolute',
                display: 'block',
                zIndex: '1',
                background: 'bisque',
                padding: '0.5em',
                marginTop: '0.3em',
                fontSize: '.85rem',
                marginLeft: '.8em',
              }}>Tooltip</span>,
              tooltipRef.current
            )
          )
        }
      </button>
    </div>
  );
}

export default App;
