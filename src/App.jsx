import Accordion from './assets/components/Accordion';

function App() {
  const items = [
    {
      id: 'skdfj',
      label: 'Can I use React on a Project?',
      content:
        ' You can use React on any project.You can use React on any project. You can use React on any project.',
    },
    {
      id: '234j',
      label: 'Can I use Javascript on a Project?',
      content:
        'You can use React on any project. You can use React on any project.You can use React on any project.',
    },
    {
      id: 'x,cmvn',
      label: 'Can I use CSS on a Project?',
      content:
        'You can use React on any project.You can use React on any project.You can use React on any project.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
