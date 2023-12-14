import Accordion from './assets/components/Accordion';

function App() {
  const itmes = [
    {
      label: 'Can I use React on a Project?',
      content:
        ' You can use React on any project.You can use React on any project. You can use React on any project.',
    },
    {
      label: 'Can I use Javascript on a Project?',
      content:
        'You can use React on any project. You can use React on any project.You can use React on any project.',
    },
    {
      label: 'Can I use CSS on a Project?',
      content:
        'You can use React on any project.You can use React on any project.You can use React on any project.',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
