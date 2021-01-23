import React, { Component } from 'react';

class counter extends Component {
    // local state hatake, parent ka hi data use kr rhe ha
    // state = {
    //     value: this.props.value,
    //     // tags: ['tag1', 'tag2', 'tag3']
    //     tags: []
    // }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    // handleIncrement function can be converted into error function and thenwe will not need constructor
    // constructor() {
    //     super()
    //     // because this will be undefined in handleIncrement function
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    render() { 
        let classes = this.getBadgeClasses();
        console.log(this.props)
        return (
            <div>
                {this.props.children}
                {this.props.id}
                <span style={this.style} className={classes}>{this.formatCount()}</span>
                <button 
                    onClick={ ()=> this.props.handleIncrement(this.props.counter) }
                    className="btn btn-success btn-sm">Increment
                </button>
                {/* {this.state.tags.length === 0 && "Please create a new tag"} */}
                {/* {this.renderTags()} */}
                <button 
                
                    onClick={ () => this.props.onDelete(this.props.counter.id) } 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    // event listener ke sath agar koi data dena ho tou arrow funtion onClick mein hi daal dete ha
    // handleIncrement = () => {
    //     this.setState({value: this.state.value + 1})
    // }

    renderTags() {
        if(this.state.tags.length === 0){
            return <p>There are no tags</p>
        }
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.props.counter;
        return count === 0 ? "Zero" : count
    }
}
 
export default counter;