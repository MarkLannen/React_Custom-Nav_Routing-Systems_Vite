import Button from './Button';
import { GoBell, GoFileCode, GoDatabase } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoFileCode />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something else
        </Button>
      </div>
    </div>
  );
}

export default App;
