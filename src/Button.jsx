import className from 'classnames';

const finalClassName = className('px-1.5', {
  'bg-blue-500': true,
  'text-yellow-500': true,
});

console.log(finalClassName);

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return (
    <button className='px-3 py-1.5 border border-blue-600 bg-blue-500 text-white'>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one prop of primary, secondary, success, warning or danger may be true for each button'
      );
    }
  },
};

export default Button;
