
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface PDFViewerProps {
  url: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

export const PDFViewer = ({ url, open, onOpenChange, title }: PDFViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when the URL changes or dialog opens
    if (open) {
      setIsLoading(true);
    }
  }, [url, open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] h-[80vh] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative flex-1 h-full min-h-[60vh] rounded-md overflow-hidden border">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          <iframe
            src={url}
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
            style={{ border: "none" }}
            title="PDF Document"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
