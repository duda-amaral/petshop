import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PetShopCardProps {
  title: string;
  description: string;
}

const PetShopCard: React.FC<PetShopCardProps> = ({ title, description }) => (
  <Card className="shadow-md rounded-lg">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default PetShopCard;
