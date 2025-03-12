
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building, User, Mail, Briefcase, Users, DollarSign, Camera } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function CompanyInfo() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const companyData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@virocards.com",
    companyName: "ViroCards B.V. (prod)",
    companyType: "BV",
    industry: "Information and Communication",
    employees: "3",
    revenue: "Less than €1 million",
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarUrl(e.target?.result as string);
        toast.success("Company profile picture updated");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>
            View and manage your company details
          </CardDescription>
        </div>
        <div className="relative">
          <Avatar className="h-20 w-20">
            <AvatarImage src={avatarUrl || ""} />
            <AvatarFallback className="bg-gray-100">
              {companyData.companyName.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <Label htmlFor="picture" className="absolute bottom-0 right-0 cursor-pointer">
            <div className="rounded-full bg-primary p-2 text-white hover:bg-primary/90">
              <Camera className="h-4 w-4" />
            </div>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </Label>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <User className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="firstName"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.firstName}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <User className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="lastName"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.lastName}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Mail className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="email"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.email}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Building className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="companyName"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.companyName}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyType">Company Type</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="companyType"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.companyType}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="industry"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.industry}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees">Number of employees</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Users className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="employees"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.employees}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue">Annual Revenue</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="revenue"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.revenue}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
