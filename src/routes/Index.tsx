function Index() {
  return (
    <div className="flex-col mx-auto max-w-[1440px] p-3">
      <div>
        <div className="flex justify-between items-center mx-auto max-w-[800px]">
          <h1 className="font-bold text-4xl">Prémium hirdetések</h1>
          <div className="flex items-center space-x-1 bg-gray-800 p-1 rounded-lg">
            <div className="w-10 h-10 bg-gray-700 flex rounded-l-md">Card</div>
            <div className="w-10 h-10 bg-gray-800 flex rounded-r-md hover:bg-gray-600">list</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
