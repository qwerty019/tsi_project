// import  { PureComponent } from 'react'
// import type { ReactNode } from 'react'

// interface Props {}
// interface State {}

// class List extends PureComponent<Props, State> {
//     constructor(props: Props) {
//         super(props)

//         this.state = {
            
//         }
//     }

//     render(): ReactNode {
        
//         return (
//             <div>Haha</div>
//         )
//     }
// }

// export default List

import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

export const List = () => {
  //render(): ReactNode {
    const [data, setData] = useState<{ title: string; message: string} | null>(
      null
    );
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/data");
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    return (
        <div style={{ backgroundColor: 'pink', padding: '30px' }}>
            <h1>{data?.title}</h1>
            <p>{data?.message}</p>
        </div>
    );
//  }
}
export default List
