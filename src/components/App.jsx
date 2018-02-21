import React from 'react';
import { Banner, Card, ContactInfo, DesktopBannerNav, MobileBannerNav, MobileTitle, FadeUpTitle, Panel, Title } from './Panels.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Panel
                    id="home"
                    containerClasses="section hero is-fullheight is-dark"
                    banner={
                        <Banner />
                    }
                >
                    <FadeUpTitle
                        columnClasses="column is-hidden-touch"
                        titleClasses="title title-desktop has-text-white"
                        title="Chase Ramsey"
                        extra={
                            <p className="subtitle has-text-white">
                                Web Developer
                            </p>
                        }
                    />
                    <MobileTitle
                        titleClasses="title title-touch has-text-white"
                        title="Chase Ramsey"
                        extra={
                            <p className="subtitle has-text-white">
                                Web Developer
                            </p>
                        }
                    />
                    <Card
                        columnClasses="column is-hidden-desktop"
                        headerClasses="card-header is-black"
                        subtitleClasses="subtitle has-text-danger"
                        header="About Me"
                        cardClasses="card-content card-nav has-text-link"
                    >
                        <MobileBannerNav />
                    </Card>
                    <DesktopBannerNav />
                </Panel>
                <Panel
                    id="background"
                    containerClasses="section hero is-fullheight is-warning"
                >
                    <MobileTitle
                        titleClasses="title title-touch"
                        title="Who I am"
                    />
                    <Card
                        direction="right"
                        headerClasses="card-header is-link"
                        subtitleClasses="subtitle has-text-light"
                        header="Background"
                        cardClasses="card-content is-black has-text-light"
                        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id auctor magna. Sed sodales sapien id euismod tempor. Ut tincidunt sem ac nulla accumsan fringilla. Curabitur in neque nulla. Duis quis luctus nunc, a interdum quam. Duis odio massa, efficitur sed varius eget, auctor sit amet sapien. Nullam vitae ipsum pharetra, porttitor tellus at, sodales odio. Fusce at elit ac augue pharetra condimentum eget id ipsum. Mauris blandit tellus at augue dignissim mattis. Proin purus orci, vehicula in pellentesque non, pellentesque ut urna. Nullam dolor sem, mattis nec dictum ac, sollicitudin nec mauris."
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id auctor magna.
                            Sed sodales sapien id euismod tempor. Ut tincidunt sem ac nulla accumsan fringilla.
                            Curabitur in neque nulla. Duis quis luctus nunc, a interdum quam. Duis odio massa,
                            efficitur sed varius eget, auctor sit amet sapien. Nullam vitae ipsum pharetra,
                            porttitor tellus at, sodales odio. Fusce at elit ac augue pharetra condimentum eget
                            id ipsum. Mauris blandit tellus at augue dignissim mattis. Proin purus orci, vehicula
                            in pellentesque non, pellentesque ut urna. Nullam dolor sem, mattis nec dictum ac,
                            sollicitudin nec mauris.
                        </p>
                    </Card>
                    <Title
                        titleClasses="title title-desktop is-pulled-right"
                        title="Who I am"
                    />
                </Panel>
                <Panel
                    id="experience"
                    containerClasses="section hero is-fullheight is-link"
                >
                    <MobileTitle
                        titleClasses="title title-touch"
                        title="Where I've been"
                    />
                    <Title
                        titleClasses="title title-desktop"
                        title="Where I've been"
                    />
                    <Card
                        headerClasses="card-header is-danger"
                        subtitleClasses="subtitle has-text-light"
                        header="Experience"
                        cardClasses="card-content is-black has-text-light"
                    >
                        <p>
                            <span className="has-text-primary"><a href="#"><strong>Maize Analytics</strong></a> – Software Developer</span>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id auctor magna.
                            Sed sodales sapien id euismod tempor. Ut tincidunt sem ac nulla accumsan fringilla.
                            Curabitur in neque nulla. Duis quis luctus nunc, a interdum quam. Duis odio massa,
                            efficitur sed varius eget, auctor sit amet sapien.
                        </p><br />
                        <p>
                            <span className="has-text-primary"><a href="#"><strong>Nashville Software School</strong></a> – Apprentice Software Developer</span>
                        </p>
                        <p>
                            Nullam vitae ipsum pharetra,
                            porttitor tellus at, sodales odio. Fusce at elit ac augue pharetra condimentum eget
                            id ipsum. Mauris blandit tellus at augue dignissim mattis. Proin purus orci, vehicula
                            in pellentesque non, pellentesque ut urna. Nullam dolor sem, mattis nec dictum ac,
                            sollicitudin nec mauris.
                        </p>
                    </Card>
                </Panel>
                <Panel
                    id="projects"
                    containerClasses="section hero is-fullheight is-black"
                >
                    <MobileTitle
                        titleClasses="title title-touch"
                        title="What I've done"
                    />
                    <Card
                        headerClasses="card-header is-warning"
                        subtitleClasses="subtitle has-text-black"
                        header="Projects"
                        cardClasses="card-content"
                    >
                        <p>
                            <a href="https://github.com/chase-ramsey/budgethound" className="has-text-danger">
                                <strong>BudgetHound</strong>
                            </a> (under construction) is a budgeting app built in Django that helps you create and meet
                            spending goals. Modeled after calorie-counting apps, BudgetHound invites you to log your
                            transactions as you spend and gives you feedback about your daily and monthly budget standing.
                        </p><br />
                        <p>
                            <a href="https://github.com/chase-ramsey/fogdog" className="has-text-danger">
                                <strong>Fogdog</strong>
                            </a> has one job, and one job only: bark when there is fog. Currently deployed on AWS Lambda
                            and serving the Nashville area, Fogdog will send you a text message if conditions are foggy
                            and will update you on current conditions once a day.
                        </p><br />
                        <p>
                            <a href="https://github.com/chase-ramsey/broadsheet" className="has-text-danger">
                                <strong>Broadsheet</strong>
                            </a> is an RSS feed aggregator built in AngularJS and backed by Firebase. Users can create
                            profiles, subscribe to preselected or custom feeds, save articles for later, and talk with
                            other users about interesting stories.
                        </p>
                    </Card>
                    <Title
                        titleClasses="title title-desktop is-pulled-right"
                        title="What I've done"
                    />
                </Panel>
                <Panel
                    id="contact"
                    containerClasses="section hero is-fullheight is-primary"
                >
                    <ContactInfo />
                </Panel>
            </div>
        );
    }
}
