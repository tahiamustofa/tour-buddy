const RatingTable = () => {
    return (
      <div className="flex justify-center items-center flex-1" >
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden p-6">
         
  

          {/* Rating Bars Section */}
          <div className="w-full grid grid-cols-1 gap-1 mt-5">
            <div>
              {[
                { label: "Guide", value: "4.8" },
                { label: "Comfort", value: "89%" },
                { label: "Value for money", value: "88%" },
                { label: "Safety", value: "54%" },
              ].map((item, index) => (
                <dl key={index} className="mb-3">
                  
                  <dd className="flex gap-5 items-center ">
                  <dt className="text-xs font-medium text-gray-500">{item.label}</dt>
                    <div className="flex w-full">
                    <div className="w-full bg-gray-200 rounded-sm h-2.5 me-2">
                      <div className="bg-[#FFDA32] h-2.5 rounded-sm" style={{ width: item.value }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.value}</span>
                    </div>
                 
                    
                  </dd>
                </dl>
              ))}
            </div>
  
            
          </div>
        </div>
      </div>
    );
  };
  
  export default RatingTable;
  