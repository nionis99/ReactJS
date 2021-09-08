interface HeadingProps {
    title: string;
    subtitle: string;
}

const Heading = ({title, subtitle}: HeadingProps) => (
    <>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
    </>
);

export default Heading;