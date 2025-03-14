
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyInfo } from "@/components/settings/CompanyInfo";
import { UserManagement } from "@/components/settings/UserManagement";
import { Subscription } from "@/components/settings/Subscription";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="company" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-8 p-1">
            <TabsTrigger value="company" className="px-8 py-3">Company Information</TabsTrigger>
            <TabsTrigger value="users" className="px-8 py-3">User Management</TabsTrigger>
            <TabsTrigger value="subscription" className="px-8 py-3">Subscription</TabsTrigger>
          </TabsList>
          <TabsContent value="company">
            <CompanyInfo />
          </TabsContent>
          <TabsContent value="users">
            <UserManagement />
          </TabsContent>
          <TabsContent value="subscription">
            <Subscription />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;
