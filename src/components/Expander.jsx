import React from "react";

class Expander extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const {expanded} = this.state;
        this.setState({
            expanded: !expanded
        });
    }


    render() {
        const {expandedTitle, collapsedTitle, children} = this.props;
        const {expanded} = this.state;
        const title = expanded ? collapsedTitle : expandedTitle;
        const glyph_icon = expanded ? "glyph-minus" : "glyph-plus";

        /* If there's no children, we don't need expander component at all*/
        if(!children) {
            return null
        }

        return (
            <div>
                <span className={`link ${glyph_icon}`} onClick={this.handleClick}>
                    {title}
                </span>
                {expanded && <div className="padded">
                    {children}
                </div>}

            </div>
        )
    }
}

export default Expander;