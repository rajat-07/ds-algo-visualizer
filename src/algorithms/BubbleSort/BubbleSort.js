import React, { useState } from "react";
import "./BubbleSort.css";

function BubbleSort() {
  const [addValue, setAddValue] = useState("");

  const handleAddValue = (e) => {
    setAddValue(e.target.value);
  };

  const handleInsert = () => {
    // insert
  };

  return (
    <div>
      <h4>Bubble Sort</h4>
      <div>
        <input
          className="bs-input-add"
          type="text"
          value={addValue}
          onChange={handleAddValue}
        />
        <button onClick={handleInsert}> Insert </button>
      </div>
      <div>
        <svg>
          <circle cx={50} cy={150} r={10} fill="red" />
          <text
            text-anchor="middle"
            fill="white"
            font-size="10px"
            font-family="Arial"
            dx="50"
            dy="130"
          >
            10
          </text>
          <circle cx={80} cy={150} r={10} fill="red" />
          <circle cx={290} cy={150} r={12} fill="red" />
          <circle cx={50} cy={150} r={10} fill="red" />
          <circle cx={50} cy={150} r={10} fill="red" />
          <circle cx={50} cy={150} r={10} fill="red" />
        </svg>
      </div>
    </div>
  );
}

export default BubbleSort;

/*


class FirstUnique {
    public:
        list<int> q;
        map<int, int> hash;
        set<int> s;
        FirstUnique(vector<int>& nums) {
            for(int i=0; i<nums.size(); i++){
                if(hash.find(nums[i]) != hash.end()){
                    if(s.find(nums[i]) == s.end()){
                        s.insert(nums[i]);
                        q.remove(nums[i]);
                    } 
                } else {
                    q.push_back(nums[i]);
                    hash[nums[i]]++;
                }
            }
        }
        
        int showFirstUnique() {
            if(q.size() != 0){
                return q.front();
            }
            return -1;
        }
        
        void add(int value) {
            if(hash.find(value) != hash.end()){
                if(s.find(value) == s.end()){
                    s.insert(value);
                    q.remove(value);
                } 
            } else {
                q.push_back(value);
                hash[value]++;
            }
        }
    };

    */
