
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, FileText, DollarSign, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PDFViewer } from "./PDFViewer";

export const Subscription = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
  
  // Mock data for demonstration
  const contractStartDate = new Date("2023-06-15");
  const contractEndDate = new Date("2024-06-15");
  const totalSavings = 15780.42;
  const feePercentage = 20;
  const contractPdfUrl = "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf";
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Active Plan</CardTitle>
          <CardDescription>Details of your current subscription.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">No-Cure No-Pay Model</h3>
              <div className="flex items-center mt-2 text-emerald-600">
                <Check className="h-4 w-4 mr-2" />
                <span className="text-sm">Active plan</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Your subscription model: <span className="font-medium">{feePercentage}% fee on savings</span>
              </p>
              <p className="text-sm text-gray-500">
                Total savings so far: <span className="font-medium">€{totalSavings.toLocaleString()}</span>
              </p>
              <p className="text-sm text-gray-500">
                Contract period: <span className="font-medium">{formatDate(contractStartDate)} - {formatDate(contractEndDate)}</span>
              </p>
            </div>
            <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">View Subscription Details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Subscription Details</DialogTitle>
                  <DialogDescription>
                    Complete information about your current plan
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Contract Information</h4>
                    <p className="text-sm text-gray-500">Start date: {formatDate(contractStartDate)}</p>
                    <p className="text-sm text-gray-500">End date: {formatDate(contractEndDate)}</p>
                    <p className="text-sm text-gray-500">Fee structure: {feePercentage}% of documented savings</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Performance</h4>
                    <p className="text-sm text-gray-500">Total savings identified: €{totalSavings.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Fee amount: €{(totalSavings * feePercentage / 100).toLocaleString()}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Billing</h4>
                    <p className="text-sm text-gray-500">Billing cycle: Quarterly</p>
                    <p className="text-sm text-gray-500">Next invoice: July 15, 2024</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button variant="outline" className="w-full justify-between" onClick={() => window.open("https://stripe.com", "_blank")}>
            <div className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Edit Billing Information</span>
            </div>
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-between"
            onClick={() => setIsPdfViewerOpen(true)}
          >
            <div className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              <span>View Contract</span>
            </div>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <CardTitle className="flex items-center text-blue-800 dark:text-blue-200">
            <DollarSign className="h-6 w-6 text-blue-500 mr-2" />
            Savings Overview
          </CardTitle>
          <CardDescription>Your total savings identified through our service.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total savings</p>
              <p className="text-4xl font-bold flex items-center text-blue-600">
                €{totalSavings.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-50 text-blue-700 py-1.5 px-4 rounded-full text-sm font-medium border border-blue-100">
              {feePercentage}% fee
            </div>
          </div>
          <div className="mt-8 space-y-3 bg-gradient-to-b from-blue-50/50 to-transparent p-4 rounded-lg">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Your fee amount</span>
              <span className="font-medium text-blue-700">€{(totalSavings * feePercentage / 100).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Your net savings</span>
              <span className="font-medium text-blue-700">€{(totalSavings * (100 - feePercentage) / 100).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PDF Viewer */}
      <PDFViewer 
        url={contractPdfUrl} 
        open={isPdfViewerOpen} 
        onOpenChange={setIsPdfViewerOpen}
        title="Service Contract" 
      />
    </div>
  );
};
