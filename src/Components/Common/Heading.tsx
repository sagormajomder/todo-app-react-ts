import { HeadingType } from '../../types';

const Heading = ({ children }: HeadingType) => {
  return (
    <h1 className='border-b-2 border-black mb-4 text-2xl pb-2'>{children}</h1>
  );
};

export default Heading;
