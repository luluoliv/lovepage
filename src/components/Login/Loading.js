import { Hearts } from 'react-loader-spinner';

export default function HeartLoading(props) {
    return (
      <div className="loading-container">
        <Hearts
          height="80"
          width="80"
          color="red"
          ariaLabel="hearts-loading"
          wrapperStyle
          wrapperClass
          visible={true}
        />
      </div>
    );
  }
  
