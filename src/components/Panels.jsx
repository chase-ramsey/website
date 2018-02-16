import React from 'react'
import Fade from 'react-reveal/Fade'

function Panel(props) {
    return (
        <div id={props.id} className={props.containerClasses}>
            <div className="hero-body">
                <div className="container">
                        {props.banner}
                    <div className="columns is-multiline">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )   
}

class Banner extends React.Component {
    render() {
        return (
            <Fade down>
                <div id="banner" className="columns banner">
                    <div className="column portrait is-half">
                    </div>
                    <div className="column is-half is-portrait-opposite is-hidden-touch">
                        <div className="notification is-warning">
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

class FadeUpTitle extends React.Component {
    render() {
        return (
            <Fade up>
                <div id="banner-title" className={this.props.columnClasses || "column is-hidden-touch"}>
                    <div className="title-wrapper notification is-link">
                        <h1 className={this.props.titleClasses}>{this.props.title}</h1>
                        {this.props.extra}
                    </div>
                </div>
            </Fade>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <Fade down>
                <div className={this.props.columnClasses || "column is-hidden-touch"}>
                    <div className="title-wrapper">
                        <h1 className={this.props.titleClasses}>{this.props.title}</h1>
                        {this.props.extra}
                    </div>
                </div>
            </Fade>
        )
    }
}

class MobileTitle extends React.Component {
    render() {
        return (
            <div className="column is-hidden-desktop has-text-centered">
                <h1 className={this.props.titleClasses}>{this.props.title}</h1>
                {this.props.extra}
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <Fade up>
                <div id={this.props.id} className={this.props.columnClasses || 'column'}>
                    <div className="card">
                        <div className={this.props.headerClasses}>
                            <div className="card-header-title">
                                <h3 className={this.props.subtitleClasses}>{this.props.header}</h3>
                            </div>
                        </div>
                        <div className={this.props.cardClasses}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

class DesktopBannerNav extends React.Component {
    render() {
        return (
            <Fade up>
                <div id="home-nav" className="column is-hidden-touch">
                    <div className="notification is-link">
                        <div className="columns is-multiline">
                            <div className="column is-half">
                                <a className="subtitle" href="#background">Background</a>
                            </div>
                            <div className="column is-half">
                                <a className="subtitle" href="#experience">Experience</a>
                            </div>
                            <div className="column is-half">
                                <a className="subtitle" href="#projects">Projects</a>
                            </div>
                            <div className="column is-half">
                                <a className="subtitle" href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

function MobileBannerNav(props) {
    return (
        <div className="columns has-text-centered">
            <a href="#background" className="column">Background</a>
            <a href="#experience" className="column">Experience</a>
            <a href="#projects" className="column">Projects</a>
            <a href="#contact" className="column">Contact</a>
        </div>
    )
}

class ContactInfo extends React.Component {
    render() {
        return (
            <Fade up>
                <div className="column">
                    <h1 className="title title-touch">Talk to me</h1>
                    <div className="card">
                        <div className="card-content card-nav has-text-link">
                            <div className="columns has-text-centered">
                                <a href="https://github.com/chase-ramsey" className="column">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/chase-ramsey-157b97bb/" className="column">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                                <a href="mailto:ramsey.chase@gmail.com" className="column">
                                    <i className="fas fa-envelope fa-2x"></i>
                                </a>
                                <a href="https://twitter.com/not_chase" className="column">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

module.exports = {
    Banner: Banner,
    Card: Card,
    DesktopBannerNav: DesktopBannerNav,
    MobileBannerNav: MobileBannerNav,
    ContactInfo: ContactInfo,
    MobileTitle: MobileTitle,
    FadeUpTitle: FadeUpTitle,
    Panel: Panel,
    Title: Title
}
