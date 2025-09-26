import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus, Edit, Trash2, Leaf } from "lucide-react";

interface Field {
  id: string;
  name: string;
  cropType: string;
  area: number;
  coordinates: string;
  status: "active" | "fallow" | "harvested";
  plantingDate: string;
  expectedHarvest: string;
}

interface FieldManagerProps {
  fields: Field[];
  onAddField: (field: Omit<Field, 'id'>) => void;
  onEditField: (id: string, field: Partial<Field>) => void;
  onDeleteField: (id: string) => void;
}

export default function FieldManager({ 
  fields, 
  onAddField, 
  onEditField, 
  onDeleteField 
}: FieldManagerProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingField, setEditingField] = useState<Field | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    cropType: "",
    area: 0,
    coordinates: "",
    status: "active" as Field['status'],
    plantingDate: "",
    expectedHarvest: ""
  });

  const cropTypes = [
    "Wheat", "Rice", "Corn", "Soybeans", "Cotton", "Tomatoes", 
    "Potatoes", "Onions", "Carrots", "Lettuce", "Other"
  ];

  const resetForm = () => {
    setFormData({
      name: "",
      cropType: "",
      area: 0,
      coordinates: "",
      status: "active",
      plantingDate: "",
      expectedHarvest: ""
    });
    setEditingField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingField) {
      onEditField(editingField.id, formData);
    } else {
      onAddField(formData);
    }
    
    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (field: Field) => {
    setEditingField(field);
    setFormData({
      name: field.name,
      cropType: field.cropType,
      area: field.area,
      coordinates: field.coordinates,
      status: field.status,
      plantingDate: field.plantingDate,
      expectedHarvest: field.expectedHarvest
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this field?")) {
      onDeleteField(id);
    }
  };

  const getStatusColor = (status: Field['status']) => {
    switch (status) {
      case 'active': return 'bg-green-500/10 text-green-700 dark:text-green-300';
      case 'fallow': return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300';
      case 'harvested': return 'bg-blue-500/10 text-blue-700 dark:text-blue-300';
    }
  };

  return (
    <Card data-testid="field-manager">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            Field Management
          </CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} data-testid="button-add-field">
                <Plus className="h-4 w-4 mr-2" />
                Add Field
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {editingField ? 'Edit Field' : 'Add New Field'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="field-name">Field Name</Label>
                  <Input
                    id="field-name"
                    placeholder="e.g., North Field A"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    data-testid="input-field-name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="crop-type">Crop Type</Label>
                  <Select
                    value={formData.cropType}
                    onValueChange={(value) => setFormData({...formData, cropType: value})}
                    required
                  >
                    <SelectTrigger data-testid="select-field-crop-type">
                      <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cropTypes.map((crop) => (
                        <SelectItem key={crop} value={crop.toLowerCase()}>
                          {crop}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="field-area">Area (hectares)</Label>
                    <Input
                      id="field-area"
                      type="number"
                      step="0.1"
                      placeholder="2.5"
                      value={formData.area || ""}
                      onChange={(e) => setFormData({...formData, area: parseFloat(e.target.value) || 0})}
                      data-testid="input-field-area"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="field-status">Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => setFormData({...formData, status: value as Field['status']})}
                    >
                      <SelectTrigger data-testid="select-field-status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="fallow">Fallow</SelectItem>
                        <SelectItem value="harvested">Harvested</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coordinates">Coordinates/Location</Label>
                  <Input
                    id="coordinates"
                    placeholder="e.g., 40.7128, -74.0060 or GPS coordinates"
                    value={formData.coordinates}
                    onChange={(e) => setFormData({...formData, coordinates: e.target.value})}
                    data-testid="input-field-coordinates"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="planting-date">Planting Date</Label>
                    <Input
                      id="planting-date"
                      type="date"
                      value={formData.plantingDate}
                      onChange={(e) => setFormData({...formData, plantingDate: e.target.value})}
                      data-testid="input-planting-date"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="harvest-date">Expected Harvest</Label>
                    <Input
                      id="harvest-date"
                      type="date"
                      value={formData.expectedHarvest}
                      onChange={(e) => setFormData({...formData, expectedHarvest: e.target.value})}
                      data-testid="input-harvest-date"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button type="submit" data-testid="button-save-field">
                    {editingField ? 'Update Field' : 'Add Field'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    data-testid="button-cancel-field"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fields.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Leaf className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
              <p>No fields added yet.</p>
              <p className="text-sm">Add your first field to start monitoring.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fields.map((field) => (
                <div
                  key={field.id}
                  className="border rounded-lg p-4 hover-elevate"
                  data-testid={`field-card-${field.id}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{field.name}</h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {field.cropType}
                      </p>
                    </div>
                    <Badge className={getStatusColor(field.status)}>
                      {field.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{field.area} hectares</span>
                    </div>
                    {field.plantingDate && (
                      <div>Planted: {new Date(field.plantingDate).toLocaleDateString()}</div>
                    )}
                    {field.expectedHarvest && (
                      <div>Harvest: {new Date(field.expectedHarvest).toLocaleDateString()}</div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(field)}
                      data-testid={`button-edit-${field.id}`}
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(field.id)}
                      data-testid={`button-delete-${field.id}`}
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}