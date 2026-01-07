interface WatermarkProps {
  text: string;
}

export default function Watermark({ text }: WatermarkProps) {
  return (
    <div className="watermark" aria-hidden="true">
      {text}
    </div>
  );
}
