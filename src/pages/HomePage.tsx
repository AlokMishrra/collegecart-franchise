import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShoppingBag, TrendingUp, Shield, Headphones, Download,
  Smartphone, Truck, CheckCircle, Smile, Clock, Users, ArrowRight,
  BarChart3, Building2, Banknote, Percent, ArrowUpRight,
  Gift, Coins,
  Star, Quote,
  Plus, Minus,
  Phone, Mail, Globe, Upload, Rocket,
  GraduationCap, UserCheck, Home as HomeIcon, Megaphone, Briefcase, Heart,
  DollarSign, Package, Handshake, BarChart, Zap, BookOpen,
  Layers, Settings, Target, Award,
} from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/components/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { getActiveBrochure } from "@/lib/admin.functions";
import heroImg from "@/assets/hero-student.jpg";
import aboutImg from "@/assets/about-team.jpg";
import faqImg from "@/assets/faq-illustration.jpg";

// Import the actual HomePage component from the route file
import { Route } from "@/routes/index";

// Export the component directly
export default Route.component;
