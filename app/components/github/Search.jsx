import React from 'react';

class Search extends React.Component {

    onSubmit(e){
        e.preventDefault();
        let userName = this.refs.userName.value.trim();
        if(!userName){
            alert('Please enter username')
            return;
        }
        this.props.onFormSubmit(userName);
        this.refs.userName.value='';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this) }>
                    <label> Search github users </label>
                    <input type="text" ref="userName" className = "form-control"/>
                </form>
            </div>
        )
    }
}


export default Search;