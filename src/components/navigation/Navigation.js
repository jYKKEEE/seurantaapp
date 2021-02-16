const Navigation = () => {
  return (
    <div style={{ background: '#091c29' }}>
      <div className='flex items-center justify-between w-10/12 mx-auto py-3 py-3 text-white'>
        <span className='flex flex-row justify-center items-center  text-red-700 text-2xl font-mono'>
          Seuranta
          <span className='w-2 h-2 inline-block rounded-full bg-white'>
            app
          </span>
          {/*valkoinen imago pallero */}
        </span>
        <div className='flex flex-row text-base'>
          <span className='mr-3'>Info</span>
          <span>Tapahtumat</span>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
