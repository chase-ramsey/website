import React from 'react';
import { Card, CardNav, ContactInfo, MobileTitle, Panel, Title } from './Panels.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Panel
                    id="home"
                    containerClasses="section hero is-fullheight is-bold is-dark"
                >
                    <Title
                        titleClasses="title title-desktop has-text-warning"
                        title="Chase Ramsey"
                        extra={
                            <p className="subtitle has-text-warning">
                                Web Developer
                            </p>
                        }
                    />
                    <MobileTitle
                        titleClasses="title title-touch has-text-warning"
                        title="Chase Ramsey"
                        extra={
                            <p className="subtitle has-text-warning">
                                Web Developer
                            </p>
                        }
                    />
                    <Card
                        headerClasses="card-header is-link"
                        subtitleClasses="subtitle has-text-light"
                        header="About Me"
                        cardClasses="card-content card-nav has-text-link"
                        cardBody={<CardNav />}
                    />
                </Panel>
                <Panel
                    id="background"
                    containerClasses="section hero is-fullheight is-bold is-warning"
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
                        cardClasses="card-content is-dark has-text-light"
                        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id auctor magna. Sed sodales sapien id euismod tempor. Ut tincidunt sem ac nulla accumsan fringilla. Curabitur in neque nulla. Duis quis luctus nunc, a interdum quam. Duis odio massa, efficitur sed varius eget, auctor sit amet sapien. Nullam vitae ipsum pharetra, porttitor tellus at, sodales odio. Fusce at elit ac augue pharetra condimentum eget id ipsum. Mauris blandit tellus at augue dignissim mattis. Proin purus orci, vehicula in pellentesque non, pellentesque ut urna. Nullam dolor sem, mattis nec dictum ac, sollicitudin nec mauris."
                    />
                    <Title
                        titleClasses="title title-desktop is-pulled-right"
                        title="Who I am"
                    />
                </Panel>
                <Panel
                    id="experience"
                    containerClasses="section hero is-fullheight is-bold is-link"
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
                        cardClasses="card-content is-dark has-text-light"
                        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id auctor magna. Sed sodales sapien id euismod tempor. Ut tincidunt sem ac nulla accumsan fringilla. Curabitur in neque nulla. Duis quis luctus nunc, a interdum quam. Duis odio massa, efficitur sed varius eget, auctor sit amet sapien. Nullam vitae ipsum pharetra, porttitor tellus at, sodales odio. Fusce at elit ac augue pharetra condimentum eget id ipsum. Mauris blandit tellus at augue dignissim mattis. Proin purus orci, vehicula in pellentesque non, pellentesque ut urna. Nullam dolor sem, mattis nec dictum ac, sollicitudin nec mauris."
                    />
                </Panel>
                <Panel
                    id="projects"
                    containerClasses="section hero is-fullheight is-bold is-dark"
                >
                    <MobileTitle
                        titleClasses="title title-touch"
                        title="What I've done"
                    />
                    <Card
                        headerClasses="card-header is-warning"
                        subtitleClasses="subtitle has-text-dark"
                        header="Projects"
                        cardClasses="card-content"
                        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id auctor magna. Sed sodales sapien id euismod tempor. Ut tincidunt sem ac nulla accumsan fringilla. Curabitur in neque nulla. Duis quis luctus nunc, a interdum quam. Duis odio massa, efficitur sed varius eget, auctor sit amet sapien. Nullam vitae ipsum pharetra, porttitor tellus at, sodales odio. Fusce at elit ac augue pharetra condimentum eget id ipsum. Mauris blandit tellus at augue dignissim mattis. Proin purus orci, vehicula in pellentesque non, pellentesque ut urna. Nullam dolor sem, mattis nec dictum ac, sollicitudin nec mauris."
                    />
                    <Title
                        titleClasses="title title-desktop is-pulled-right"
                        title="What I've done"
                    />
                </Panel>
                <Panel
                    id="contact"
                    containerClasses="section hero is-fullheight is-bold is-primary"
                >
                    <ContactInfo />
                </Panel>
            </div>
        );
    }
}
