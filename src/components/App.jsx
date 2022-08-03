import { PropsCounter } from './widget/widget';

export const App = () => {
  return (
    <div
      style={{
        margin: 'auto',
        width: '360px',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <PropsCounter />
    </div>
  );
};
