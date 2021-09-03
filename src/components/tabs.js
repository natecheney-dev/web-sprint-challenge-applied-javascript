import axios from "axios";

const Tabs = (topics) => {




  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
  

  const topicsA = document.createElement('div');
  topics.forEach(item =>{
    const text = document.createElement('div');
    text.textContent = item;
    text.classList.add('tab');
    topicsA.appendChild(text);
  })


  topicsA.classList.add('topics');
  
 

  return topicsA;

}

const tabsAppender = async (selector) => {
  try{
    const resp = await axios.get('http://localhost:5000/api/topics');
    const info = resp.data.topics;
    const createTabs = Tabs(info);
    const selectAll = document.querySelector(selector);
    selectAll.appendChild(createTabs);
    console.log('passing info')
  }
  catch{
    console.log('You failed');
  }


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
