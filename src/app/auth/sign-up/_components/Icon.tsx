import Image from "next/image";
import "./Icon.scss";

interface IconProps {
    src: string;
    alt: string;
    height: number;
    width: number;
}

const Icon: React.FC<IconProps> = ({ src, alt, height, width }) => (
    <div className="form-icon">
        <Image alt={alt} height={height} width={width} src={src} />
    </div>
);

export default Icon;