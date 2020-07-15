import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,


    };

    handleDeleteOptions = () => {
        console.log("Clicked");

        this.setState(() => ({ options: [] }));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })

        }))

    }

    handleAddOptions = (option) => {
        if (!option) {
            return "Enter Valid value";


        }
        else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const picker = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: picker
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
            console.log('data fetching');
        } catch (error) {
            console.log("Error");

        }


    }
    componentDidUpdate(prevState, prevProps) {

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("bla bla");

    }



    render() {

        const appDetails = {

            subTitle: "Put your life in the hands of a computer",

        };
        return (

            <div>
                <Header subTitle={appDetails.subTitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />


                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOptions} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption} />

            </div>
        );
    }
}

Header.defaultProps = {
    title: 'Indecision'
}
IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;