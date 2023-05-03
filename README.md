# Assignment 4 - Theory

# Namaste React - Web Series

Q1: Is JSX mandatory for React ?
Ans: No, we can write React code without JSX as well.

Q2: Is ES6 mandatory for React?
Ans: ES6 is not mandatory for React but it is highly recommended as while writting React code we use ES6 features extensively. If we choose to write React code without ES6, we may need to use workarounds to achieve the same functionality.

Q3: {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX.
Ans: {TitleComponent} -> This will give a warning in console and will not render anything in UI.
{<TitleComponent />} & {<TitleComponent></TitleComponent>} will render components in UI.

Q4: How can i Write comments in JSX?
Ans: We can write comments in JavaScript style. {/_ This is a JSX comment _/}

Q5: What is <React.Fragment> and <></> ?
Ans: React.Fragment allows us to group children components together without adding extra node in DOM. <></> is shorter alternative to React.Fragment and is same as React.Fragment.

Q6: What is virtual dom ?
Ans: In React, the virtual DOM is a lightweight representation of the actual DOM. It is a JavaScript object that contains all the information necessary to describe the structure and content of the HTML document, including the element types, attributes, and text content.

Q7: What is Reconciliation in react ?
Ans: When a React component updates, instead of directly manipulating the actual DOM, React creates a new virtual DOM tree, compares it with the previous virtual DOM tree, and computes the differences between them. This process is called "reconciliation", and it is what allows React to update the DOM efficiently.

Q8: What is react Fiber?
Ans: React Fiber is a reimplementation of the React reconciliation algorithm to provide better performance, flexibility, and support for incremental rendering. The primary goal of React Fiber is to improve the performance of React applications in cases where the application needs to handle a large number of updates or complex user interactions. React Fiber accomplishes this by breaking up the rendering process into smaller, more manageable units called "fibers".

Q9: Why we needs keys in React ?
Ans: React needs unique id as key to optimize rendering of looped element. Whenever a new element is added/updated/removed in the looped elements list, all the elements will be re-rendered if unique keys are not given. React uses uniques keys to optimize re-render cycle and prevent unnecessary renders.

Q10: Can we use index as keys ?
Ans: It is possible to use index as a key in React but it is not recommended. It should be used only when unique id is not available in data and the components are not changing.

Q11: What is props?
Ans: props are the properties that we pass to the component as argument.

Q12: What is config driven UI ?
Ans: UI is developed in such way that it changes/updates based on the data/config coming from the backend.
eg- Swiggy site will show different background colours, carousals, offers etc based on user location.
UI takes these configs and show UI accordingly.
