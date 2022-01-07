class Sidebar extends React.Component {
    render(){
        return(
            <div class = "sidebar">
                <div class = "titles">
                    <h4>Dashboard</h4>
                    <h4>Widget</h4>
                    <h4>Reviews</h4>
                    <h4>Customers</h4>
                    <h4>Online Analysis</h4>
                    <h4>Settings</h4>
                </div>
            </div>
        )
    }
}

class Reviews extends React.Component {
    render() {
        return(
            <div class = "reviews">
                <h4>Reviews</h4>
                <h2>1,281</h2>
            </div>
        )
    }
}

class Rating extends React.Component {
    render() {
        return(
            <div class="rating">
                <h4>Average Rating</h4>
                <h2>4.6</h2>
            </div>
        )
    }
}

class Analysis extends React.Component {
    render() {
        return(
            <div class="sentiment">
                <h4>Sentiment Analysis</h4>
                <h3 class="data">960</h3>
                <h3 class="data">122</h3>
                <h3 class="data">321</h3>
            </div>
        )
    }
}

class Visitors extends React.Component {
    render() {
        return(
            <div class="visitors">
                <h4>Website Visitors</h4>
                <h2>821</h2>
                <div class="box"></div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <div class="grid">
                <Sidebar />
                <Reviews />
                <Rating />
                <Analysis />
                <Visitors />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#main-container')

)