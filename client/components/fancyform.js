import React, { Component } from 'react';

export default class MyFancyForm extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>---</h1>
      </div>);
  }
}


// class MyFancyForm2 extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             multiline: '',
//             commaSeparated: '',
//             multiSelect: [],
//           }
//         this.availableOptions = [
//             'apple',
//             'grape',
//             'cherry',
//             'orange',
//             'pear',
//             'peach',
//           ]
      
//       }


//     handleCommaSeparatedChange (event)  {
//       const {value} = event.target
//       const allVals = value
//         .split(',')
//         .map(v => v.trim())
//         .filter(Boolean)
//       this.setState({
//         commaSeparated: value,
//         multiline: allVals.join('\n'),
//         multiSelect: allVals.filter(v =>
//           MyFancyForm.availableOptions.includes(v),
//         ),
//       })
//     }

//     handleMultilineChange = (event) => {
//       const {value} = event.target
//       const allVals = value
//         .split('\n')
//         .map(v => v.trim())
//         .filter(Boolean)
//       this.setState({
//         multiline: value,
//         commaSeparated: allVals.join(','),
//         multiSelect: allVals.filter(v =>
//           MyFancyForm.availableOptions.includes(v),
//         ),
//       })
//     }

//     handleMultiSelectChange = (event) => {
//       const allVals = Array.from(
//         event.target.selectedOptions,
//       ).map(o => o.value)
//       this.setState({
//         multiSelect: allVals,
//         multiline: allVals.join('\n'),
//         commaSeparated: allVals.join(','),
//       })
//     }

//     render() {
//       const {
//         commaSeparated,
//         multiline,
//         multiSelect,
//       } = this.state
//       return (
//         <form>
//           <div>
//             <label>
//               comma separated values:
//               <br />
//               <input
//                 type="text"
//                 value={commaSeparated}
//                 onChange={
//                   this.handleCommaSeparatedChange
//                 }
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               multiline values:
//               <br />
//               <textarea
//                 value={multiline}
//                 rows={
//                   MyFancyForm.availableOptions
//                     .length
//                 }
//                 onChange={
//                   this.handleMultilineChange
//                 }
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               multiSelect values:
//               <br />
//               <select
//                 multiple
//                 value={multiSelect}
//                 size={
//                   MyFancyForm.availableOptions
//                     .length
//                 }
//                 onChange={
//                   this.handleMultiSelectChange
//                 }
//               >
//                 {MyFancyForm.availableOptions.map(
//                   optionValue => (
//                     <option
//                       key={optionValue}
//                       value={optionValue}
//                     >
//                       {optionValue}
//                     </option>
//                   ),
//                 )}
//               </select>
//             </label>
//           </div>
//         </form>
//       )
//     }
//   }

//   export default MyFancyForm2