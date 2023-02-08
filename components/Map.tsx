import Portal from "@/components/Portal";
import { PrimaryActionButton } from "@utrecht/component-library-react";

export interface MapProps {
  onClose: Function;
}

export default function Map({ onClose }: MapProps) {
  return (
    <Portal>
      <PrimaryActionButton type="button" onClick={() => onClose()}>
        Sluit
      </PrimaryActionButton>
    </Portal>
  );
}
