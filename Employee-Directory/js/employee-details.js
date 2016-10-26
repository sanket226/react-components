var Header = React.createClass({
    render: function () {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
});

var EmployeePage = React.createClass({
    
    getInitialState: function() {
        return {employee: {}};
    },
    
    componentDidMount: function(){
        this.props.service.findById(this.props.employeeId).done(function(result) {
            this.setState({employee: result});
        }.bind(this));
    },
    
    render: function(){
        return(
            <div>
                <Header text="Employee Details"/>
                <h3>{this.state.employee.firstName} {this.state.employee.lastName}</h3>
                {this.state.employee.title}
            </div>
        )
    }    
});


React.render(<EmployeePage employeeId={11} service={employeeService}/>, document.body); 