import './LoadingSpiner.css';

export default function LoadingSpiner({
  loading = true,
}: {
  loading?: boolean;
}) {
  return (
    <>
      <div
        className='loader-container'
        style={{ display: loading ? 'block' : 'none' }}>
        <div className='loader'>
          Loading
          <span></span>
        </div>
      </div>
    </>
  );
}
